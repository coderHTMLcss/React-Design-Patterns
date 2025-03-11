import React from "react";

export interface AccessControlProps {
  roles: string[];
  fallbackComponent: React.ComponentType;
  injectedProps?: { [key: string]: unknown };
}

export interface InjectedProps {
  userName?: string;
  userPermissions?: string[];
}

export interface WrappedComponentProps extends InjectedProps {
  message: string;
}
