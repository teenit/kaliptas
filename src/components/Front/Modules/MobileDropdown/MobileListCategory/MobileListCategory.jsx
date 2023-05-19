import {getLanguageForRootLink, getRealLanguage} from "../../../../functions/getLanguage";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {useState} from "react";
import {Link} from "react-router-dom";

const MobileListCategory = ({category, close})=>{

    const [open, setOpen] = useState(false)

    return (<div>
        <div>
            <Link to={getLanguageForRootLink()+"/catalog/" + category.id} onClick={close}>{category.title[getRealLanguage()]}</Link>

            {
                category.children !== undefined
                    ? (<span onClick={()=>{setOpen(!open)}}>
                            {
                                open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>
                            }
                        </span>)
                    : null
            }

        </div>
        {
            open ? (category.children.map((cat, index)=>{
                return <MobileListCategory category={cat} key={index} close={close}/>
            })) : null
        }
    </div>);
}

export default MobileListCategory;