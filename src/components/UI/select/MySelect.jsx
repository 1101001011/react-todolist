import React from "react";
import './MySelect.css'

const MySelect = ({createCategory, defaultValue, setDefaultValue, active, setActive}) => {
    const categories = [
        { title: 'Study' },
        { title: 'Daily' },
        { title: 'Job' }
    ]

    const categoryHandler = (c) => {
        setDefaultValue(c.title)
        createCategory(c.title)
        setActive(false)
    }

    return (
        <div className="select">
            <div 
                className="select__title"
                onClick={active ? () => setActive(false) : () => setActive(true)}
            >
                <p>{defaultValue}</p>
                {active
                    ? <img style={{transform: 'rotate(180deg)'}} src="https://img.icons8.com/ios-glyphs/90/000000/expand-arrow--v1.png" alt=''/>
                    : <img src="https://img.icons8.com/ios-glyphs/90/000000/expand-arrow--v1.png" alt=''/>
                }
                
            </div>
            <div className={active ? "select__modal active" : "select__modal"}>
                {categories.map(c => 
                    <div 
                        className="select__category"
                        key={c.title}
                        onClick={() => categoryHandler(c)}
                    >
                        {c.title}
                    </div>    
                )}
            </div>
        </div>
    )
}

export default MySelect