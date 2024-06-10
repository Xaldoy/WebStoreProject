const agent = {
  get: async (endpoint) => {
    try {
      const response = await fetch(import.meta.env.VITE_API + endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};

module.exports = agent;
