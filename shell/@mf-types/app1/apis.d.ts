
    export type RemoteKeys = 'app1/App1Index' | 'app1/App1Btn';
    type PackageType<T> = T extends 'app1/App1Btn' ? typeof import('app1/App1Btn') :T extends 'app1/App1Index' ? typeof import('app1/App1Index') :any;