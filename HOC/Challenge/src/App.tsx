import { withAccessControl } from './utils/withAccessControl';
import NotAuthorized from './components/NotAuthorized';
import MyComponent from './components/MyComponent';

const AccessControlComponent = withAccessControl(MyComponent);

const App = () => {
  return (
    <div>
      <AccessControlComponent
        roles={["admin", "manager"]}
        // roles={["user", "guest"]}
        fallbackComponent={NotAuthorized}
        message="Hello, Admin!"
        injectedProps={{
          userName: "John Wick",
          userPermissions: ["view_dashboard", "edit_settings"],
        }}
      />

    </div>
  );
};

export default App;
