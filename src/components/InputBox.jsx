import React, { useId } from 'react'



function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const ammountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
    <label htmlFor={ammountInputId} className='text-black/40 mb-2 inline-block'>
      {label}
    </label>
    <input type="number" 
    id={ammountInputId} 
    className='outline-none w-full bg-transparent py-1.5' 
    placeholder='Amount' 
    value={amount} 
    disabled={amountDisable}
    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
    />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'> Currency Type</p>
        <select className='p-1 rounded-lg bg-gray-100 outline-none cursor-pointer'
        value={selectCurrency} 
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
        disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => 
          (
            <option key={currency} 
            value={currency}>
            {currency}
            </option>
          ))}


        </select>
      </div>
    </div>
  )
 
}
export default InputBox;
