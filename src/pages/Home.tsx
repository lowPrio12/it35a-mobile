import { IonButton, IonAlert } from '@ionic/react';
import { useState } from 'react';


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
  );
};

export default Home;