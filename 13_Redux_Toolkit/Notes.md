# Redux Toolkit

The official, opinionated, batteries-included toolset for efficient Redux development.


# CreateSlice Function
Behind the scene it uses immer js. So we don't need to use/install immer js externally. CreateSlice reduces our code lines and more optimized it.
createSlice function basically create 3 things for us.

    -- Action Types
    -- Action Creators
    -- Reducers

# CombineReducers
Creating and combining slices for us.

# Important to note
-- We do not need to use the deprecated createStore method from redux. Instead of that we should use the configureStore from @reduxjs/toolkit. Which is new and modern form of createStore with more functionalities.

-- By using @reduxjs/toolkit method, we now do not need to connect the redux dev tool by writing code in vs code. It automatically use the redux dev tool.

-- Also, we don't have to use combineReducers method/function because it is also prebuilt in @reduxjs/toolkit. We just need to tell the name of our reducers/slices and rest of work will done by @reduxjs/toolkit.

-- We can now uninstall the redux from "npm un redux", because we are not using redux. We are using redux toolkit now. Redux Toolkit by default or behind the scene using redux, we do not need to install redux separately.

-- So, by using @reduxjs/toolkit our code of lines will be half.