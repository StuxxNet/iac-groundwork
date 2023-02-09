import { VpcOptions, SubnetOptions, NetworkOptions, Network } from "iac-module-network-aws";

const vpcDefinition: VpcOptions = {
    name: "EKS",
    cidrBlock: "10.0.0.0/16"
}

const publicSubnetsDefinition: SubnetOptions[] = [{
    name: "EKS-Public-1",
    cidrBlock: "10.0.0.0/20",
    availabilityZone: "eu-central-1a",
    assignPublicAddress: true
}, {
    name: "EKS-Public-2",
    cidrBlock: "10.0.16.0/20",
    availabilityZone: "eu-central-1b",
    assignPublicAddress: true
}, {
    name: "EKS-Public-3",
    cidrBlock: "10.0.32.0/20",
    availabilityZone: "eu-central-1c",
    assignPublicAddress: true
}]

const privateSubnetsDefinition: SubnetOptions[] = [{
    name: "EKS-Private-1",
    cidrBlock: "10.0.48.0/20",
    availabilityZone: "eu-central-1a",
    assignPublicAddress: false
}, {
    name: "EKS-Private-2",
    cidrBlock: "10.0.64.0/20",
    availabilityZone: "eu-central-1b",
    assignPublicAddress: false    
},  {
    name: "EKS-Private-3",
    cidrBlock: "10.0.80.0/20",
    availabilityZone: "eu-central-1c",
    assignPublicAddress: false    
}]

const groundworkDefinition: NetworkOptions = {
    vpcOptions: vpcDefinition,
    publicSubnetsOptions: publicSubnetsDefinition,
    privateSubnetsOptions: privateSubnetsDefinition
}

const awsGroudwork = new Network("iacGroundwork", groundworkDefinition);

export const vpcInfos = awsGroudwork.exportVpcInfos();