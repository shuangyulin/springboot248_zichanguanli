








const menu = {
    list() {
        return [
    {
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"部门类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBumen"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"存放地点类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryDidian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资产类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShangpin"
                    }

                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"校园资产管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
                ],
                "menu":"校园资产管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资产借用管理",
                        "menuJump":"列表",
                        "tableName":"jieyong"
                    }
                ],
                "menu":"资产借用管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"入库管理",
                        "menuJump":"列表",
                        "tableName":"shangpinChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"入库列表管理",
                        "menuJump":"列表",
                        "tableName":"shangpinChuruInoutList"
                    }
                ],
                "menu":"入库管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"资产维修管理",
                        "menuJump":"列表",
                        "tableName":"weixiu"
                    }
                ],
                "menu":"资产维修管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"资产报废管理",
                        "menuJump":"列表",
                        "tableName":"baofei"
                    }
                ],
                "menu":"资产报废管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,{
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"校园资产管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
                ],
                "menu":"校园资产管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增"
                        ],
                        "menu":"资产借用管理",
                        "menuJump":"列表",
                        "tableName":"jieyong"
                    }
                ],
                "menu":"资产借用管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"资产维修管理",
                        "menuJump":"列表",
                        "tableName":"weixiu"
                    }
                ],
                "menu":"资产维修管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;
