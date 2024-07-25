import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { useState } from "react";
import { User } from "../model/User";
import { JSON_SERVER_URL } from "../constants";

const Tab1: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  /**
   * Fetching the users also works
   */
  const fetchUsers = () => {
    fetch(`${JSON_SERVER_URL}/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: User[]) => {
        // Work with the user data here
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  /**
   * Works fine
   */
  const createUser = () => {
    const url = `${JSON_SERVER_URL}/users`;

    const newUser = {
      id: Math.random() * 1000,
      name: "Fetch User´",
      email: "fetchUser@test.com",
      number: "1234567890",
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Testing fetch and Capacitor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Testing fetch and Capacitor</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" onClick={fetchUsers}>
          Make Request fetch ✔︎
        </IonButton>
        <IonButton expand="full" onClick={createUser}>
          Create User fetch ✔︎
        </IonButton>
        {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
