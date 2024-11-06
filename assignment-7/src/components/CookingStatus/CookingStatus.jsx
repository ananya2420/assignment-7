import './CookingStatus.css';

const CookingStatus = () => {
  return (
    <div>
  
      <section className="cook-section">
        <h1 className="text-5xl font-bold">Want to cook: 01</h1>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <button>Preparing</button>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      
      <section className="cooking-section">
        <h1 className="text-5xl font-bold">Currently cooking: 02</h1>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              <tr>
                <th colSpan="4" className="font-bold">
                  Total Time = 45 minutes
                </th>
              </tr>
              <tr>
                <th colSpan="4" className="font-bold">
                  Total Calories = 1050 calories
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CookingStatus;