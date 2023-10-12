import "./App.css";
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [usersMoney, setUsersMoney] = useState([
    {
      user: "auris",
      money: 0,
    },
    {
      user: "enrikas",
      money: 0,
    },
    {
      user: "donatas",
      money: 0,
    },
    {
      user: "marijus",
      money: 0,
    },
    {
      user: "paulius",
      money: 0,
    },
  ]);
  const [totalBalance, setTotalBalance] = useState(0);
  useEffect(() => {
    // const data = JSON.parse(Cookies.get('money'))
    // console.log(data)
    // setTotalBalance(data.totalBalance)
    // setUsersMoney(data.usersMoney)

    setInterval(() => {
      getAccountMoney()
    }, 40000)

    getAccountMoney()
  }, []);


  const getAccountMoney = () => {
        //user 1
        axios.get("https://zenith-confused-blue.glitch.me/accounts").then((res) => {
          let money = 0;
          res.data.farmer_accounts.map((account) =>{
            money = money + parseInt(account.purse)
          })
          setUsersMoney((prev) => prev.map((userMoney) => {
            if (userMoney.user === "donatas") {
              return { ...userMoney, money: money };
            }
            return userMoney;
          }));
        });
    
      //user 2
      axios.get("https://spiced-onyx-droplet.glitch.me/accounts").then((res) => {

        let money = 0;
        res.data.farmer_accounts.map((account) =>{
          money = money + parseInt(account.purse)
        })
        setUsersMoney((prev) => prev.map((userMoney) => {
          if (userMoney.user === "auris") {
            return { ...userMoney, money: money };
          }
          return userMoney;
        }));
      });
       //user 3
       axios.get("https://dusty-first-trip.glitch.me//accounts").then((res) => {

        let money = 0;
        res.data.farmer_accounts.map((account) =>{
          money = money + parseInt(account.purse)
        })
        setUsersMoney((prev) => prev.map((userMoney) => {
          if (userMoney.user === "marijus") {
            return { ...userMoney, money: money };
          }
          return userMoney;
        }));
      });
       //user 4
       axios.get("https://star-shelled-key.glitch.me/accounts").then((res) => {

        let money = 0;
        res.data.farmer_accounts.map((account) =>{
          money = money + parseInt(account.purse)
        })
        setUsersMoney((prev) => prev.map((userMoney) => {
          if (userMoney.user === "enrikas") {
            return { ...userMoney, money: money };
          }
          return userMoney;
        }));
      });
       //user 5
       axios.get("https://fair-daily-unicorn.glitch.me/accounts").then((res) => {

        let money = 0;
        res.data.farmer_accounts.map((account) =>{
          money = money + parseInt(account.purse)
        })
        setUsersMoney((prev) => prev.map((userMoney) => {
          if (userMoney.user === "paulius") {
            return { ...userMoney, money: money };
          }
          return userMoney;
        }));
      });


      Cookies.set('money', JSON.stringify({
        totalBalance: totalBalance,
        usersmoney: usersMoney,
      }));
  }


  useEffect(() => {
    setTotalBalance(getTotalBalance())
  }, [usersMoney]);

  const getTotalBalance = () => {
    let money = 0;
      usersMoney.map((acc) => {
      money = money + parseInt(acc.money);
    });
    return money;
  };

  return (
    <div className="App">
      <div className="total-balance">
        <span className="name">Total balacne - </span>
        <span className="balance">{totalBalance.toLocaleString()}</span>
      </div>
      {usersMoney.map((acc) => (
        <div className="users">
          <span className="name">{`user ${acc.user}:`}</span>
          <span className="balance">{`${acc.money.toLocaleString()}`}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
