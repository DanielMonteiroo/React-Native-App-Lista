import styled from "styled-components/native";

//componente container
export const InputContainer = styled.View({
width:380,
flexDirection: "row"
});

//componente de texto da input
export const Input = styled.TextInput({
    flexDirection: "row",
    backgroundColor: "#304163",
    flex:1,
    padding:16,
    borderRadius:4,
    color:"white"
});

export const InputButton = styled.TouchableOpacity({
    backgroundColor: "black",
    padding:16,
    borderRadius:4,
});