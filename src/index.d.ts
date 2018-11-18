import * as React from "react";
interface ContextInterface {
    [key: string]: any;
}
declare type createContextFactoryInterface = (name: string, contextParam: any, onContextUpdateParam?: () => any) => {
    Provider: React.ComponentType<React.ProviderProps<ContextInterface>>;
    connect: (Component: React.SFC<any> | typeof React.Component) => React.StatelessComponent<any>;
};
declare const createContextFactory: createContextFactoryInterface;
export default createContextFactory;
