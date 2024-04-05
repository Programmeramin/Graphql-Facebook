import Student from "../models/Student.js"

export const resolvers = {

    Query : {
        students : async () =>{
            return await Student.find()
        },

    },


    Mutation : {

        createStudent : async (_,{ title, photo}) => {
             
            const data = await Student.create({  
                title,
                photo
            });

            return data

        },

        updatedStudent : async (_, {id, title, photo}) => {

            const data = await Student.findByIdAndUpdate(id, {
             title, photo 
            },{ new : true});

            return data

        }



    }

}