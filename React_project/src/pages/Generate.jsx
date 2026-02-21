import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Generate() {
  const location = useLocation();
  const prompt = location.state?.prompt;

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!prompt) return;

    console.log("Prompt being sent:", prompt);
    console.log("API URL:", import.meta.env.VITE_API_URL);

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/generate/`,
          { prompt: prompt }, 
          {
            headers: {
              "Content-Type": "application/json", 
            },
          }
        );
        

        console.log("Backend response:", response.data);
        setResult(response.data.result || "No result returned");
      } catch (error) {
        console.error("Axios error:", error);
        setResult("Something went wrong ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [prompt]);

  if (!prompt) return <p className="text-red-500 text-lg">No prompt provided ❗</p>;
  return (
    <div className="min-h-screen flex w-full flex-col items-center justify-center p-10 bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-600">Generating Response...</p>
        </div>
      ) : (
        result && (
          <div className="bg-white p-6 rounded-2xl shadow-xl w-3/4 max-w-3xl whitespace-pre-wrap">
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )
      )}
    </div>
  );
}
export default Generate;