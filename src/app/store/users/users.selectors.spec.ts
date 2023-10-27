import * as fromSelectors from './users.selectors';
import * as fromReducer from './../reducers/users.reducers';
import { UsersLoaded } from './users.actions';
import { User } from 'src/app/modules/users/types/users';

describe('Users Selector', () => {
    it('sholud select all Users', () => {
        const { initUserssState } = fromReducer;
        const Users: User[] = [
            {id: 1, first_name: 'Mohammed', last_name: 'Hamouda', email: 'm@m.com', avatar: ''}
        ];
        const action = UsersLoaded({Users: Users})
        const state = fromReducer.UsersReducer(initUserssState, action);

        const result = fromSelectors.selectAllUsers.projector(state);
        expect(result.length).toBeGreaterThanOrEqual(1)
    });

    it('sholud Users not loaded', () => {
        const { initUserssState } = fromReducer;
        const Users: User[] = [
            {id: 1, first_name: 'Mohammed', last_name: 'Hamouda', email: 'm@m.com', avatar: ''}
        ];
        const action = UsersLoaded({Users: Users})        
        const state = fromReducer.UsersReducer(initUserssState, action);

        const result = fromSelectors.isUsersLoaded.projector(state);
        expect(result).toBeTruthy()
    });       

})