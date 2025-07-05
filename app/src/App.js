import { useState } from "react";

const tableData = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {

  const [data, setData] = useState(tableData);

  const handleSortByDate = () => {

    const filteredData = data.sort((a, b) => {
      
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);

      if(dateA !== dateB)
        return dateB - dateA
      else {

        return parseInt(b.views) - parseInt(a.views)
      }
    })

    // console.log("filter data >> ", filteredData);
    setData([...filteredData]);

  }

  const handleSortByViews = () => {

    const filteredData = data.sort((a, b) => {
      
      let viewA = parseInt(a.views);
      let viewB = parseInt(b.views);

      if(viewA !== viewB)
        return viewB - viewA
      else {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateB - dateA
      }
    })

    console.log("filter data >> ", filteredData);
    setData([...filteredData]);

  }
  

  return (
    <div className="App">
      
      <h1>Data and Views Table</h1>

      <button
      onClick={handleSortByDate}
      >Sort by Date</button>
      <button
      onClick={handleSortByViews}
      >Sort by Views</button>

      {/* Generate table based on data */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        
        <tbody>
          {
            data.map((row, index) => {

              return (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.views}</td>
                  <td>{row.article}</td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
    </div>
  );
}

export default App;
