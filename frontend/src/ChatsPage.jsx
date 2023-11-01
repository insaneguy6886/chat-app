import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="c4c8fc3d-b581-4eb1-be47-fb13ec8b44e3"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100v%" }}
      />
    </div>
  );
};
export default ChatsPage;
