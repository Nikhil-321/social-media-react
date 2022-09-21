import { gql } from "@apollo/react-hooks";

export const CHANGE_PASSWORD = gql`
mutation changePassword($oldPassword: String!, $newPassword: String!, $confirmPassword: String!) {
    changePassword(changePasswordInput: {
        oldPassword: $oldPassword,
        newPassword: $newPassword,
        confirmPassword: $confirmPassword
    })
}

`