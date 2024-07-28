import { createContext, useState, useEffect } from "react";

const WordContext = createContext();

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddWord = async (newWord) => {
    const requestBody = {
      english: newWord.english,
      russian: newWord.russian,
      transcription: newWord.transcription,
      id: newWord.id,
      tags: "",
      tags_json: '[""]',
    };
    try {
      const response = await fetch(`/api/words/add`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
      const data = await response.json();
      setWords([...words, data]);
    } catch (error) {
      console.log("Oops, something went wrong", error);
    }
  };

  const handleDeleteWord = async (id) => {
    await fetch(`/api/words/${id}/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    setWords(words.filter((word) => word.id !== id));
  };

  const handleUpdatedWord = async (updatedWord, id) => {
    const requestBody = {
      english: updatedWord.english,
      russian: updatedWord.russian,
      transcription: updatedWord.transcription,
      id: updatedWord.id,
      tags: "",
      tags_json: '[""]',
    };
    try {
      const response = await fetch(`/api/words/${id}/update`, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to update word");
      }
      const data = await response.json();
      setWords(words.map((word) => (word.id === id ? data : word)));
    } catch (error) {
      console.log("Oops, something went wrong", error);
    }
  };

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    try {
      const response = await fetch("/api/words");
      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const serverData = await response.json();
      setWords(serverData);
      setLoading(false);
    } catch (error) {
      console.log("Oops, something went wrong", error);
    }
  };

  return (
    <WordContext.Provider
      value={{
        words,
        loading,
        handleAddWord,
        handleDeleteWord,
        handleUpdatedWord,
        setWords,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordProvider, WordContext };
