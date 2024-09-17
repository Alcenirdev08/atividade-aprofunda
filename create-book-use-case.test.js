"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_book_use_case_1 = require("../../src/application/use-cases/create-book-use-case");
// Mocks
const bookRepositoryMock = {
    save: jest.fn()
};
const idGeneratorMock = {
    generate: jest.fn().mockReturnValue('unique-id-123')
};
// Teste unitário
describe('CreateBookUseCase', () => {
    let createBookUseCase;
    beforeEach(() => {
        createBookUseCase = new create_book_use_case_1.CreateBookUseCase(bookRepositoryMock, idGeneratorMock);
    });
    it('should create a book and save it', () => {
        const bookParams = {
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt',
            isbn: '978-0201616224',
            publisher: 'Addison-Wesley',
            category: 'Programming',
            status: 'read'
        };
        const result = createBookUseCase.execute(bookParams);
        expect(idGeneratorMock.generate).toHaveBeenCalled();
        expect(bookRepositoryMock.save).toHaveBeenCalledWith(Object.assign({ id: 'unique-id-123', createdAt: expect.any(String) }, bookParams));
        expect(result).toEqual(Object.assign({ id: 'unique-id-123', createdAt: expect.any(String) }, bookParams));
    });
});
