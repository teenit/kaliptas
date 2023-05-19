import {a11yProps, TabPanel} from "../TabPanel/TabPanel";
import {Tab, Tabs} from "@mui/material";
import {getLanguageForRootLink, getRealLanguage} from "../../../../functions/getLanguage";
import {useRef, useState} from "react";
import s from "./ListLevel.module.css";
import {fireEvent} from "@testing-library/react";
import {Link} from "react-router-dom";

const ListLevel = function ({catList}) {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let childrenList = [];
    let catPanelList = [];
    let index = 0;

    for (const cat of catList) {
        let childrenPresent = cat.children !== undefined;
        let props = childrenPresent ? {...a11yProps(index)} : {};

        let catTab =
            <Tab
                disableRipple={true}
                key={cat.id}
                label={<Link to={getLanguageForRootLink()+"/catalog/" + cat.id}>{cat.title[getRealLanguage()]}</Link>}
                {...props}
                onMouseEnter={(event)=>{
                    fireEvent.click(event.target);
                }
                }
            />

        childrenList.push(catTab)

        if (childrenPresent) {

            let catPanel = <TabPanel key={index} index={index} value={value}>
                {
                    <ListLevel catList={cat.children}/>
                }
            </TabPanel>
            index++;
            catPanelList.push(catPanel);
        }

    }

    return (<div className={s.wrap}>
            <Tabs orientation="vertical" value={value} onChange={handleChange}>
                {childrenList}
            </Tabs>
            {catPanelList}
        </div>
    );
}

export default ListLevel;