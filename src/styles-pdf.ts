import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  MainItemWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '0.5rem',
    //gap: '0.25rem'
  },
  Content: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '48rem',
    marginTop: '4rem',
    flex: '1'
  },
  DamageFormTableContent: {
    width: "100%", 
    padding: "0.5rem 0.5rem", 
    display: 'flex', 
    //gridTemplateColumns: "50% 50%", 
    //justifyItems: "start", 
    alignItems: "stretch", 
    justifyContent: "space-evenly"
  },
  App: {
    width: "calc(100vw - 1.5rem)", 
    height: "100vh", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    flex: '1'
  },
  Menu: { 
    zIndex: "1000", 
    top: "0", 
    left: "0", 
    padding: "1rem 0.5rem 1rem", 
    width: "100%", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    backgroundColor: "white"
  },
  navbar: {
    width: "100%", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    //gap: '1rem'
  },
  Container: {
    width: "100%", 
    flex: '1', 
    display: "flex", 
    flexDirection: "column", 
    //gap: '1rem'
  },
  MainItemTitleHeader: {
    width: "100%", 
    padding: "0.375rem 1.125rem", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    backgroundColor: "#e68301", 
    color: "#ffffff", 
    fontSize: '1rem', 
    fontWeight: "bold"
  },
  MainItemInfoWrapper: {
    width: "100%", 
    padding: "0rem 5rem", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  SubItemWrapper: {
    width: "100%", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center"
  },
  SubItemHeader: {
    width: "100%", 
    padding: "0.5rem 1.25rem", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fcb51d", 
    textTransform: "uppercase", 
    fontSize: '0.75rem', 
    //gap: '0.5rem'
  },
  mapView: {
    margin: "0.5rem 0rem", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    //gap: '0.5rem', 
    width: "100%", 
    height: '15rem', 
    border: "1px solid #000000"
  },
  map: {
    flex: "1", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100%", 
    border: "1px solid #000000"
  },
  leaflet_container: {
    width: "100%", 
    height: "100%"
  },
  MapSubtitles: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center", 
    width: "100%", 
    //gap: '4rem'
  },
  SubItemInfo: {
    width: "100%", 
    padding: "0.5 2.5", 
    display: "flex", 
    // gridTemplateColumns: "auto auto", 
    // justifyItems: "start", 
    alignItems: "center", 
    justifyContent: "space-between"
  },
  ObsBox: {
    minHeight: '5.625rem', 
    width: "100%", 
    padding: "1rem 1.25rem", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "flex-start", 
    //gap: '0.625rem', 
    backgroundColor: "rgba(252, 181, 29, 0.5)", 
    fontSize: '0.625rem'
  },
  DamageFormTableWrapper: {
    width: "100%", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center"
  },
  DamageFormHeader: {
    width: "100%", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fcb51d", 
    textTransform: "uppercase", 
    fontSize: '0.625rem', 
    //gap: '0.5rem'
  },
  DamageFormTableContent_td: {
    border: "1px solid #dddddd",
    textAlign: "left", 
    padding: "8px"
  },
  DamageTableGroup: {
    width: "100%", 
    padding: "0rem 0.5rem", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    //gap: '0.5rem'
  },
  ItemInfoValue: {
    display: "flex", 
    //wordBreak: "keep-all", 
    fontFamily: "Arial, Helvetica, sans-serif", 
    textTransform: "uppercase", 
    fontSize: '0.625rem',
  },
  SubItemWrapper_Agents: {
    width: "100%", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "flex-start", 
    //gap: '1rem'
  },
  SubItemWrapper_AgentsSubItem: {
    display: "flex", 
    width: "100%", 
    flexDirection: "column", 
    flexWrap: "nowrap", 
    justifyContent: "flex-start", 
    alignItems: "flex-start"
  },
  SubItemInfo_Agents: {
    padding: "0rem 0.5rem", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-start", 
    alignItems: "flex-start"
  },
  ItemInfo:{
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-start",
    //gap:" 1rem",
},
ItemInfoKey:{
    fontFamily:" Arial, Helvetica, sans-serif",
    fontWeight:"bold",
    textTransform: "uppercase",
    fontSize: "0.625rem",
},
GroupItem_ItemInfoValue:{
    fontFamily:" Arial, Helvetica, sans-serif",
    fontWeight:"normal",
    textTransform: "uppercase",
    fontSize: "0.625rem",
},
ItemInfoDateValue:{
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight:"normal",
    fontSize: "0.625rem",
},
});
