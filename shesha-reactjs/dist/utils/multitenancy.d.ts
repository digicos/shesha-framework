/**
 * Sets the tenant id
 *
 * @param tenantId - the tenant id
 */
export declare const setTenantId: (tenantId: string) => void;
/**
 * Gets the tenant id
 *
 * @returns tenantId
 */
export declare const getTenantId: () => number;
export declare const isJsonParseable: (value: any) => boolean;
export declare const getCustomHeaders: () => [string, unknown][];
