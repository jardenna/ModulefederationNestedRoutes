
    export type RemoteKeys = 'app2/App2Index';
    type PackageType<T> = T extends 'app2/App2Index' ? typeof import('app2/App2Index') :any;