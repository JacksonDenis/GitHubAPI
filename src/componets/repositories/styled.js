import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 100%;
margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin: 0;
`;
WrapperTabList.tabsRole = "Tablist";


export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid #CCC;
padding: 16px;
user-select: none;
cursor: pointer;
z-index: 99999;
background-color: white;
margin: 8px;

&:focus {
    outline: none;
    box-shadow: 5px 3px 1em #CCC;
}
&.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
}
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
display: none;
padding: 16px;
margin-top: -12px;
margin-left: 11px;
border: 1px solid #CCC;


&.is-selected {
    display: block;
}
`;
WrapperTabPanel.tabsRole = "TabPanel";
