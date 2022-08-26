import styles from "./Home.module.css";
import bg1 from "./Img/bg1.svg";
import bg2 from "./Img/bg2.svg";
import bg3 from "./Img/bg3.svg";
import bg4 from "./Img/bg4.svg";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const imgObj = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwOXcd-n3qVXLOzfSbDnOcJZnkfbBpXo7g&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qwOXcd-n3qVXLOzfSbDnOcJZnkfbBpXo7g&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQO8d3ZSNd6VevKyiOYjb8OvYcsG-s_gC6Q&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJMSbZLTvlakQOPkL9pld4PJd-B8a7zxNvA&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZvY3uJ38ksp5Fjx2GuckQGpqUgKYl9x9WA&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUQO11-TDabLS3IlwCLcBenwlFWxFPgMHPQ&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxD6dGiIICXV4CUWyfSmSYaqziQydM0z-BQ&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfvN4y-cHXrGVnHOUFvvmbI1naOume8T0cg&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU4WaZkmCQyqze0hj2KWPa05zctivR-wfbdw&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBNHexkYs5wjSBYaMN7kEseXOKisuwwsntg&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlZ_96VUfwhvMnlc-zDSKczNP4EJIfH3YvA&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlZ_96VUfwhvMnlc-zDSKczNP4EJIfH3YvA&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6uwmN-rnPdedz3N4zIF4Kf7F9sdkcrKJlw&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6uwmN-rnPdedz3N4zIF4Kf7F9sdkcrKJlw&usqp=CAU",
    },
  ];

  const [imgUrl, setImgUrl] = useState(imgObj);
  const [animateImg, setAnimateImg] = useState(true);

  const randArryGen = () => {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    return ranNums;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateImg((animateImg) => !animateImg);

      const randArry = randArryGen();
      const urlAryy = [];
      randArry.map((e) => {
          urlAryy.push({ url: imgObj[e].url });
      });
      const timeOut = setTimeout(()=>{
          setImgUrl(urlAryy);
      },1000)
      return ()=> clearTimeout(timeOut)
    }, 10000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.Homecontent}>
      <div className={styles.homeBgImgs}>
        {imgUrl.map((url,index) => {
          return (
            <img
              key={index}
              className={animateImg ? styles.fadeInOut : ""}
              src={url.url}
              alt=""
            />
          )
        })}
      </div>
      <img src={bg1} alt="" />
      <img src={bg2} alt="" />
      <img src={bg3} alt="" />
      <img src={bg4} alt="" />
      <div className={styles.main}>
        <div className={styles.Content}>
          <h2>Home to India's finest handloom and handicraft!</h2>
          <br /> <br />
          <div className={styles.btnx}>
            <button className={styles.button}>
              <Link to="/mainProduct"> Explore</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
