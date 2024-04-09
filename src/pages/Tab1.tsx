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

const Tab1: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  const getNewUser = (): User => {
    return {
      id: Math.random() * 1000,
      name: "John Doe",
      email: "john.doe@example.com",
      number: "1234567890",
    };
  };

  /**
   * Making the post request with capacitor using data as Property works
   */
  const createUserCapacitor = async () => {
    const newUser = {
      name: "capUser Name",
      email: "mail@capuser.com",
      number: "1234567890",
      id: `${Math.random() * 1000}`,
    };

    const options = {
      url: "http://localhost:8000/users",
      data: newUser,
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response: HttpResponse = await CapacitorHttp.post(options);

      console.log("response", response);
    } catch (err) {}
  };

  /**
   * Fetching the users also works
   */
  const fetchUsers = () => {
    fetch("http://localhost:8000/users")
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
   * Creating users with fetch using request object fails
   * 
   * There was a problem creating the user:
   * TypeError: Input body is locked.
   */
  const createUserRequestObject = () => {
    const newUser = getNewUser();
    const request = new Request("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetch(request)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("User created successfully:", data);
      })
      .catch((error) => {
        console.error("There was a problem creating the user:", error);
      });
  };

  /**
   * Works fine
   */
  const createUser = () => {
    const url = "http://localhost:8000/users";

    const newUser = getNewUser();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton expand="full" onClick={fetchUsers}>
          Make Request fetch
        </IonButton>
        <IonButton expand="full" onClick={createUserCapacitor}>
          Make Request Capacitor Http
        </IonButton>
        <IonButton expand="full" onClick={createUserRequestObject}>
          Create User fetch Request Object
        </IonButton>
        <IonButton expand="full" onClick={createUser}>
          Create User fetch
        </IonButton>
        {users && users.map((user) => <p key={user.id}>{user.name}</p>)}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
