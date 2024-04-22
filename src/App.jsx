import { useEffect, useState } from "react"
import CollapseAndExpand from "./components/CollapseAndExpand"
import { DATA_API } from "./utils/constants"


function App() {

  const [info, setInfo] = useState({});
  const [assetList, setAssetList] = useState([]);

  useEffect(()=>{
    getData();
  }, [])

  function updateState(arr){

    const organizedData = {};
    const asset_list = [];
    
    arr.map((ele)=>{  
      const asset = ele?.asset_class;

      if(!organizedData[asset]){
        asset_list.push(asset);
        organizedData[asset] = [];
      }

      organizedData[asset].push(ele);
    })

    setInfo(organizedData);
    setAssetList(asset_list);
  }

  async function getData(){

    const data = await fetch(DATA_API);
    const json = await data.json()

    const arr = json?.payload;  

    updateState(arr);
  }

  // console.log("assetList", assetList);
  // console.log("info", info);

  if(info == {} || assetList == [])
  {
    return null;
  }

  return (
    <section className="bg-blue-50 w-[100vw] min-h-[100vh] p-5">
      <article className=" bg-white rounded-lg w-full shadow-md"> 
        {assetList.map((item, idx)=>{
          return <CollapseAndExpand asset={item} info={info[item]} key={item+idx}/>
        })}          
      </article>
    </section>
  )
}

export default App
