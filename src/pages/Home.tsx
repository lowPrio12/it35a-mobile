import { IonButton, IonAlert, IonContent, IonPage } from '@ionic/react';
import { useState } from 'react';
import './Home.css';

interface ContainerProps { }

const Home: React.FC<ContainerProps> = () => {
  const [showAlert, setShowAlert] = useState(false);

  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        setShowAlert(false);
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        setShowAlert(false);
      },
    },
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div id="container">
          <IonButton id="present-alert" onClick={() => setShowAlert(true)}>
            Click Me Please
          </IonButton>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Thank You for Clicking Me"
            subHeader=""
            message="You can click me again!"
            buttons={alertButtons}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;