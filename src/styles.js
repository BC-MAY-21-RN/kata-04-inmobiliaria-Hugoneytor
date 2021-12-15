import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    container:{
      padding: 20,
    },  
    card:{
      flex: 1,
      display: "flex",
      flexDirection: "row",
      backgroundColor:"#E5F9FE",
      marginBottom: 10,
      padding: 12,
      
    },
    containerOne:{
      flex: 1,
      borderRadius: 30,
      overflow: "hidden",
      marginRight: 15,
      height: 120,
      justifyContent: "flex-end",
      alignItems: "center"
      
    },
    containerTwo:{
      display: "flex",
      flex: 1.2,
      justifyContent: "space-between"
    },
    ratings:{
      marginBottom: 5,
      flexWrap: "wrap",
      
    },
    text:{
      fontWeight: "bold",
      backgroundColor:"#F9E9AD",
      padding: 5,
      borderRadius: 15
    },
    title:{
      fontWeight: "bold",
      fontSize: 18,
    },
    bold:{
      fontWeight: "bold",
    },
    rooms:{
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between"
    },
    estrella:{
      width:15,
      height: 15,
    },
    heart:{
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  });

  export default styles;