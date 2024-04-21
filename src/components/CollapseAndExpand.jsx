
import React, { useState } from 'react'
import up from "../assets/up.png"
import down from "../assets/down.png"

const CollapseAndExpand = ({asset, info }) => {

    const [flag, setFlag] = useState(false);

    console.log("Real info", info);

    if(!info) return null;

  return (
    <section className='border-b'>

        <button className='font-bold text-[#303883] px-3 py-4 flex items-center gap-4' onClick={()=>{
            setFlag(!flag);
        }}>
            {flag ? <img src={up} alt="arrow up icon" className="h-4" /> : <img src={down} alt="arrow up icon" className="h-4" /> }
            <p className='text-sm'>{ asset.toUpperCase() + " (" + info.length + ") "}</p>            
        </button>
        
        {flag && (<table className='w-full rounded-xl shadow-md'>
            <thead className=''>
                <tr className='border-b bg-gray-100'>
                    {info[0]?.name && <th className="w-[30%] text-xs text-[#8998ad] text-left p-4 rounded-tl-lg">NAME OF THE HOLDING</th>}
                    {info[0]?.ticker && <th className="w-[17%] text-xs text-[#8998ad] text-left p-4">TICKER</th>}
                    {info[0]?.avg_price && <th className="w-[11%] text-xs text-[#8998ad] text-left p-4">AVERAGE PRICE</th>}
                    {info[0]?.market_price && <th className="w-[11%] text-xs text-[#8998ad] text-left p-4">MARKET PRICE</th>}
                    {info[0]?.latest_chg_pct && <th className="w-[16%] text-xs text-[#8998ad] text-left p-4">LATEST CHANGE PERCENTAGE</th>}
                    {info[0]?.market_value_ccy && <th className="w-[15%] text-xs text-[#8998ad] text-left p-4">MARKET VALUE IN BASE CCY</th>}
                </tr>
            </thead>

            <tbody>
                {info.map((item, idx)=>{
                    return (
                        <tr className='bg-slate-100' key={item.name+idx}>
                            {item?.name && <td className="w-[30%] font-bold text-xs text-[#303883] text-left py-4 px-5">{item?.name}</td>}
                            {item?.ticker && <td className="w-[17%] font-bold text-xs text-[#303883] text-left py-4 px-5" >{item?.ticker}</td>}
                            {item?.avg_price && <td className="w-[11%] font-bold text-xs text-[#303883] text-left py-4 px-5">{item?.avg_price}</td>}
                            {item?.market_price && <td className="w-[11%] font-bold text-xs text-[#303883] text-left py-4 px-5">{item?.market_price}</td>}
                            {item?.latest_chg_pct && <td className="w-[16%] font-bold text-xs text-[#303883] text-left py-4 px-5">{item?.latest_chg_pct}</td>}
                            {item?.market_value_ccy && <td className="w-[15%] font-bold text-xs text-[#303883] text-left py-4 px-5">{item?.market_value_ccy}</td>}
                        </tr>
                    )
                })}
            </tbody>
        </table>)}


    </section>
  )
}

export default CollapseAndExpand