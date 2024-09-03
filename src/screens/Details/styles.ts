import styled from "styled-components/native"; 

//CONTAINER
export const Container = styled.View({
    flex:1,
    backgroundColor: '#00304D',
    padding: 16,
    paddingTop: 64,
    gap:16
});

//TOPO
export const TopContainer = styled.View({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
});

//BOTÃO
export const TopButton = styled.TouchableOpacity({
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap:12
});

//TEXTO
export const TopText = styled.Text({
    color: '#FFFFFF',
    fontSize: 16,
    
});

//TITULO CONTAINER
export const TitleContainer = styled.View({
    backgroundColor: "#304163",
    borderRadius: 4,
    padding: 8,
    paddingBottom: 16
});

//TITULO
export const Title = styled.Text({
    color: '#FFFFFF',
    fontSize: 20
});

//TEXTO DO STATUS DA TAREFA
export const TextStatus = styled.Text({
    color: '#FFFFFF',
    fontSize: 16
});

//INFO DE STATUS
export const ContainerStatus = styled.View({
    flexDirection: "row",
    justifyContent: "space-between",
});

//STATUS DO CARD
export const StatusCard = styled.View({
    flexDirection: "row",
    flex:1, 
    gap: 75,
    borderRadius: 4,
    backgroundColor: "#304163"
});

//ICONE
export const StatusIcon= styled.View({
    padding:20,
    borderRadius: 4,
    backgroundColor: "#E88A1A"
});

//EXPAÇAMENTO 
export const StatusTextContainer = styled.View({
padding: 24
});

//COR TEXTO
export const StatusText = styled.Text({
    fontSize: 16,
    color: 'white'
});

//ESTILO BOTAO DELETAR
export const StatusButtonDelete = styled.TouchableOpacity({
    borderRadius:4,
    backgroundColor: "#A80032",
    padding:20
});
