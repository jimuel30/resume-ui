export interface Response {
    status: number; // Changed type from 'int' to 'number' for TypeScript
    success: boolean; // Changed type from 'Boolean' to 'boolean'
    message: string; // Changed type from 'String' to 'string'
    data: any; // Left as 'any' for flexibility, but consider a specific type if known
}
