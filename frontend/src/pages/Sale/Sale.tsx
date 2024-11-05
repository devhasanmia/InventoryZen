const Sale = () => {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
          Purchase New Products
        </h1>
        <div className="flex justify-center">
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="" disabled selected>
              Select a product
            </option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="monitor">Monitor</option>
            <option value="headset">Headset</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default Sale;
  