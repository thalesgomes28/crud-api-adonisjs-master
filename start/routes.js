'use strict'

const Route = use('Route')

/**
 * Criar Usuários:
 */
Route.post('/createUser', 'UserController.create')
Route.post('/createProvider', 'ProviderController.create')
Route.post('/createCustomer', 'CustomerController.create')
Route.post('/createInsurance', 'InsuranceController.create')
/**
 * Logar Usuários:
 */
Route.post('/loginUser', 'UserController.login')

/**
 * Permissão de  Usuários:
 */
Route.post('/permissionUser', 'UserController.permission')

/**
 * Obter ID Usuários:
 */
Route.get('/userID/:email', 'UserController.getID')

/**
 * Listar Usuários:
 */

Route.get('/listUser', 'UserController.index')
Route.get('/listProvider', 'ProviderController.index')
Route.get('/listCustomer', 'CustomerController.index')
Route.get('/listInsurance', 'InsuranceController.index')

/**
 * Listar Usuário por Id:
 */

Route.get('/showUser/:id', 'UserController.show')
Route.get('/showProvider/:id', 'ProviderController.show')
Route.get('/showCustomer/:id', 'CustomerController.show')
Route.get('/showInsurance/:id', 'InsuranceController.show')

//Route.get('/showUser/:username', 'UserController.show') usar para pesquisar por nome/cpf/email
/**
 * Atualizar Usuários por Id:
 */
Route.put('/updateUser/:id', 'UserController.update')
Route.put('/updateProvider/:id', 'ProviderController.update')
Route.put('/updateCustomer/:id', 'CustomerController.update')
Route.put('/updateInsurance/:id', 'InsuranceController.update')
/**
 * Deletar Usuários por Id:
 */
Route.delete('/deleteUser/:id', 'UserController.destroy')
Route.delete('/deleteProvider/:id', 'ProviderController.destroy')
Route.delete('/deleteCustomer/:id', 'CustomerController.destroy')
Route.delete('/deleteInsurance/:id', 'InsuranceController.destroy')
/**
 * Contar Usuários:
 */
Route.get('/countUser', 'UserController.count')
Route.get('/countProvider', 'ProviderController.count')
Route.get('/countCustomer', 'CustomerController.count')
Route.get('/countInsurance', 'InsuranceController.count')