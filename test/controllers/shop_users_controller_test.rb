require 'test_helper'

class ShopUsersControllerTest < ActionController::TestCase
  setup do
    @shop_user = shop_users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shop_users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shop_user" do
    assert_difference('ShopUser.count') do
      post :create, shop_user: { email: @shop_user.email, name: @shop_user.name, password_hash: @shop_user.password_hash, password_salt: @shop_user.password_salt }
    end

    assert_redirected_to shop_user_path(assigns(:shop_user))
  end

  test "should show shop_user" do
    get :show, id: @shop_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shop_user
    assert_response :success
  end

  test "should update shop_user" do
    patch :update, id: @shop_user, shop_user: { email: @shop_user.email, name: @shop_user.name, password_hash: @shop_user.password_hash, password_salt: @shop_user.password_salt }
    assert_redirected_to shop_user_path(assigns(:shop_user))
  end

  test "should destroy shop_user" do
    assert_difference('ShopUser.count', -1) do
      delete :destroy, id: @shop_user
    end

    assert_redirected_to shop_users_path
  end
end
