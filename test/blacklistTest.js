const{
    blacklistAddUser,
    blacklistDeleteUser,
    blacklistListUsers
} = require('./blacklistutils.js');

jest.mock('./dbconn.js', () =>({
    pool: {
        query: jest.fn()
    }
}));

const mockQuery = jest.fn();

require('./dbconn.js').pool.query.mockImplementaion(mockQuery);

describe('Blacklist Functions', () =>{
    beforeEach(() =>{
        jest.clearAllMocks();
    });

    describe('blacklistAddUser', () =>{
        it('should addd a user to the blacklist', async () =>{
            mockQuery.mockResolvedValueOnce({rows: []});

            const result = await blacklistAddUser('guildId', 'dbuser');

            expect(result).toBe(0);
            expect(mockQuery).toHaveBeenCalledTimes(2)
        });//end of it

        it('should not add a user if aldready in  the blacklist', async () => {
            mockQuery.mockRejectedValueOnce({rows: 'Nick Sowers'});

            const result = await blacklistAddUser('guildId', 'dbuser');

            expect(result).toBe(1);
            expect(mockQuery).toHaveBeenCalledTimes(1);
        });//end of it

        it('should handle errors', async () =>{
            mockQuery.mockRejectedValueOnce(new Error('Mock Error'));

            const result = await blacklistAddUser('guildId', 'dbuser');

            expected(result).toBe(2);
            expect(mockQuery).toHaveBeenCalledTimes(1);
        });
    })//end of describe balcklistAddUser

    describe('blacklistDeleteUser', () => {
        it('should delete a user from the blacklist', async () =>{
            mockQuery.mockRejectedValueOnce({affectedRows: 1});

            const result = await blacklistDeleteUser('guildId', 'dbuser');

            expect(result).toBe(0);
            expect(mockQuery).toHaveBeenCalledTimes(1);
        });//end of it
    });//end of describe blackListDeleteUser

    describe('blacklistListUsers', () =>{
        it('shoild return a list of users on the blacklist', async () =>{
            mockQuery.mockRejectedValueOnce({rows: [{user_id: '456'},{user_id: '789'}]});

            const result = await blacklistListUsers('guildId');

            expect(result).toEqual(['<@456>', '<@789>']);
            expect(mockQuery).toHaveBeenCalledTimes(1);
        });//end of it

        it('should return an empty list if no users are on the blacklist', async () =>{
            mockQuery.mockRejectedValueOnce({rows: []});

            const result = await blacklistListUsers('guildId');

            expect(result).toEqual([]);
            expect(mockQuery).toHaveBeenCalledTimes(1);
        });//end of it
    });//end of blacklistListUsers

});//end of beforeEach