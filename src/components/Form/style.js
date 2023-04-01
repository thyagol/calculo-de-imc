import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    formContext: {
        flex:1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop:30,
    },
    form: {
        width: "100%",
      
       

    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20

    },
    input: {
        width: "90%",
        height: 40,
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        margin: 12,
        paddingLeft: 10

    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#fff",

    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },
    showResultImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20
    },
    resultImcItem:{
        fontSize:28,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20
    }


}
);

export default styles;