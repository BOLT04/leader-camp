/**
 * @export
 * @interface IUserService
 */
export interface IQuotesService {

    /**
     * @param {string} code
     * @returns {Promise<IUserModel>}
     * @memberof IUserService
     */
    findOne(code: string): Promise<any>;
}
