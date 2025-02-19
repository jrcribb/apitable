/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AutomationPropertyRO } from '../models/AutomationPropertyRO';
import { HttpFile } from '../http/http';

/**
* Update robot request
*/
export class UpdateRobotRO {
    /**
    * robot name
    */
    'name'?: string;
    /**
    * robot description
    */
    'description'?: string;
    'props'?: AutomationPropertyRO;
    /**
    * Robot whether active
    */
    'isActive'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "props",
            "baseName": "props",
            "type": "AutomationPropertyRO",
            "format": ""
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateRobotRO.attributeTypeMap;
    }

    public constructor() {
    }
}

