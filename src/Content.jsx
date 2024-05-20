import React from "react";
import "./Content.css";

const recipes = [
  {
    name: "Cream cheese glacée",
    price: "$225.60",
    rating: 4.3,
    img: "https://imgs.search.brave.com/1I0GVTjUg9EzNzqKvw83TWJGcV13Ia9_16i__wBL2YM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jYWtl/am91cm5hbC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDkvU2ltcGxlLVBv/dW5kLUNha2Utd2l0/aC1DcmVhbS1DaGVl/c2UtR2xhemUuanBn",
  },
  {
    name: "Traditional Belgian waffles",
    price: "$308.50",
    rating: 4.2,
    img: "image2.jpg",
  },
  {
    name: "Grilled salmon steak",
    price: "$72.50",
    rating: 4.1,
    img: "image3.jpg",
  },
  {
    name: "Chocolate brownie",
    price: "$65.50",
    rating: 4.8,
    img: "image4.jpg",
  },
  {
    name: "Salad bean plate",
    price: "$230.25",
    rating: 4.9,
    img: "image5.jpg",
  },
  { name: "Avocado spread", price: "$124.12", rating: 4.7, img: "image6.jpg" },
  {
    name: "Yummy paella arroz cocina",
    price: "$160.80",
    rating: 4.5,
    img: "image7.jpg",
  },
  { name: "Juicy steak", price: "$189.60", rating: 4.5, img: "image8.jpg" },
];

function Content() {
  //pls change to map method as commented on the code so you can write card only once and .

  return (
    <header>
      <h2>Delicacies</h2>
      <div className="grid">
        {/* {
        recipes.map((recipe,index)=> {
          return (
            <div key={index} className="card">
              <img
                src={recipe.img}
                alt="cream"
              />
              <div className="dcontent">
                <p>{recipe.name}</p>
                <h6>{recipe.price}</h6>
              </div>
            </div>
          );
        })
      } */}

        <div className="card">
          <img
            src="https://imgs.search.brave.com/mTM6a1lTCQnS65zsXgzH6DcPiP0rhvocoPKR1md4sZs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NjY4MjMzNC9waG90/by8lRUYlQkQlOTdh/ZmZsZXMtd2l0aC1w/b3dkZXItYW5kLXN5/cnVwLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1FTlpXUVN3/UnNhMlVsMkE0bUMw/TGJkV0Z1ZDRpeVNl/cV9TSTRlWDlZYlE0/PQ"
            alt="waffles"
          />
          <div className="dcontent">
            <p>Traditional Belgian waffles</p>
            <h6>$308.50</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgs.search.brave.com/HY7GItUatYZtWXCRrjiGtQFEXEAz9NvEJsCGoL3iIMI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzAwLzczLzE2/LzM2MF9GXzEwMDcz/MTYzOV9KdkYwQWE2/SkJ6MTBiOWZIbDFw/SUxxbVRJVjNMVjdv/Zi5qcGc"
            alt="salmon"
          />
          <div className="dcontent">
            <p>Grilled salmon steak</p>
            <h6>$234.15</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgs.search.brave.com/d0FMtMM-dH5WUNw8PA4-ZrxNirGId_OrmGxp3BCPa8A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMi8y/MDIwLzAxL0Nob2Nv/bGF0ZS1PcmFuZ2Ut/QnJvd25pZXMtUmVj/aXBlLTdkNTk1MTEt/c2NhbGVkLmpwZz9x/dWFsaXR5PTkwJnJl/c2l6ZT03MDAsNDY2"
            alt="brownie"
          />
          <div className="dcontent">
            <p>Chocolate brownie</p>
            <h6>$69.75</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgs.search.brave.com/0gAgEUKvOaorgplLX18MZumJuu0ErgFwNPQaof57WFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA2/L1RocmVlLWJlYW4t/c2FsYWQtYmxvZy00/LmpwZw"
            alt="salad"
          />
          <div className="dcontent">
            <p>Salad bean plate</p>
            <h6>$230.25</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgs.search.brave.com/qGeMCaBbZzAmdpeZrnXa1-YDXGeKv-bU_rhlW2dQ0zU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMC8wOC9hdm9j/YWRvLW9uLXRvYXN0/LTk2ZTMxNTguanBn/P3F1YWxpdHk9OTAm/cmVzaXplPTQ0MCw0/MDA"
            alt="avocado"
          />
          <div className="dcontent">
            <p>Avocado spread</p>
            <h6>$124.12</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgs.search.brave.com/l1ALH5T-odxe6905YmR-atTgQWdZdD01NEV8OFbScv0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LWNvY2luYS5s/ZWN0dXJhcy5jb20v/bWVkaW8vMjAxOC8w/Ny8xOS9wYWVsbGEt/ZGUtYXJyb3otaW50/ZWdyYWwtY29uLWdh/bWJhcy15LXNlcGlh/XzA2ZGFhZTdjXzYw/MHg2MDAuanBn"
            alt="cocina"
          />
          <div className="dcontent">
            <p>Yummy paella arroz cocina</p>
            <h6>$160.80</h6>
          </div>
        </div>
        <div className="card">
          <img
            src="https://imgs.search.brave.com/rc8gmXRwvxsEOSUNwI463f-ECXuKGKNcF1ADRqjhYqg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg2/MTA0MzQyL3Bob3Rv/L3NsaWNlZC1zdGVh/ay1yaWJleWUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVBC/bEtKVWM4YkMxSHpL/VWpLMi1VNjJ4NW55/cVRqTXMycmxkOHRt/azRzbU09"
            alt="steak"
          />
          <div className="dcontent">
            <p>Juicy steak</p>
            <h6>$189.60</h6>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Content;
