import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  TextInput,
  Button,
  IconButton,
} from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";

const ChangePwdForm = ({ visible, setVisible }) => {
  const [password, setPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [acceptPassword, setAcceptPassword] = useState(false);
  const [oldPwdIcon, setOldPwdIcon] = useState({
    show: true,
    icon: "eye-off-outline",
  });

  const [newPwdIcon, setNewPwdIcon] = useState({
    show: true,
    icon: "eye-off-outline",
  });

  useEffect(() => {
    if (
      newPassword === undefined ||
      confirmPassword === undefined ||
      newPassword.length < 5 ||
      confirmPassword.length < 5 ||
      newPassword.length != confirmPassword.length ||
      newPassword !== confirmPassword
    ) {
      setAcceptPassword(true);
    } else if (
      newPassword.length >= 5 &&
      confirmPassword.length >= 5 &&
      newPassword.length === confirmPassword.length &&
      newPassword === confirmPassword
    ) {
      setAcceptPassword(false);
    }
  }, [newPassword, confirmPassword, acceptPassword]);

  const cancelPassword = () => {
    setVisible(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setOldPwdIcon({ show: true, icon: "eye-off-outline" });
    setNewPwdIcon({ show: true, icon: "eye-off-outline" });
  };

  const changePassword = () => {
    setPassword(confirmPassword);
    cancelPassword();
  };

  return (
    <Dialog visible={visible} onDismiss={() => setVisible(false)}>
      <DialogHeader title="Change Password" />
      <DialogContent>
        <TextInput
          variant="standard"
          placeholder="Old Password"
          onChangeText={(text) => setOldPassword(text)}
          trailing={(props) => (
            <IconButton
              icon={<Icons name={oldPwdIcon.icon} {...props} />}
              {...props}
              onPress={() =>
                oldPwdIcon.show
                  ? setOldPwdIcon({ show: false, icon: "eye-outline" })
                  : setOldPwdIcon({ show: true, icon: "eye-off-outline" })
              }
            />
          )}
          style={{ marginVertical: 10 }}
          secureTextEntry={oldPwdIcon.show}
        />
        <TextInput
          variant="standard"
          placeholder="New Password"
          onChangeText={(text) => setNewPassword(text)}
          trailing={(props) => (
            <IconButton
              icon={<Icons name={newPwdIcon.icon} {...props} />}
              {...props}
              onPress={() =>
                newPwdIcon.show
                  ? setNewPwdIcon({ show: false, icon: "eye-outline" })
                  : setNewPwdIcon({ show: true, icon: "eye-off-outline" })
              }
            />
          )}
          style={{ marginVertical: 10 }}
          secureTextEntry={newPwdIcon.show}
        />
        <TextInput
          variant="standard"
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          trailing={(props) => (
            <IconButton
              icon={<Icons name={newPwdIcon.icon} {...props} />}
              {...props}
              onPress={() =>
                newPwdIcon.show
                  ? setNewPwdIcon({ show: false, icon: "eye-outline" })
                  : setNewPwdIcon({ show: true, icon: "eye-off-outline" })
              }
            />
          )}
          style={{ marginVertical: 10 }}
          secureTextEntry={newPwdIcon.show}
        />
      </DialogContent>
      <DialogActions>
        <Button
          title="Cancel"
          variant="text"
          compact
          onPress={cancelPassword}
        />
        <Button
          title="Ok"
          variant="text"
          compact
          disabled={acceptPassword}
          onPress={changePassword}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ChangePwdForm;
