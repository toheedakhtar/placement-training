import Login  from "../Login"

const Router = createBrowserRouter([
    {
        element: <Parent />,
        'children' : [
            {
                path : '/',
                element : ''
            },
            {
                path : '/2',
                element : '<Login />'
            }

        ]
    }
])