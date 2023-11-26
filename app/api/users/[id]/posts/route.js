import Prompt from '@models/prompt';
import User from '@models/user';
import {connectToDB} from '@utils/database';

export const GET = async (request, {params}) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({creator: params.id}, {__v: 0}).populate({
      path: 'creator',
      select: '-__v',
      model: User
    });

    return new Response(JSON.stringify(prompts), {status: 200});
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify('Failed to fetch all prompts'), {
      status: 500
    });
  }
};
