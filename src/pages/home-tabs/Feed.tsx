import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"

const Feed: React.FC = () => {

    const AncientHeroes = [
        {name: 'Zeus'},
        {name: 'Anti Mage'},
        {name: 'Phantom Assassin'},
        {name: 'Queen of Pain'},
        {name: 'Shadow Fiend'},
    ]
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                </IonButtons>
                
            </IonToolbar>
        </IonHeader>
            <IonContent className = "ion-padding">
            <IonList inset = {true}>

            {AncientHeroes.map((item, index) => (
    <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{item.name}</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
    ))}
    </IonList>
        </IonContent>
    </IonPage>
    );   

};

export default Feed;