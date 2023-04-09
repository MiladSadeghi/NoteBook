import { comment, commentForm } from "@/helper/formSchema";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { SUBMIT_COMMENT } from "@/graphql/mutations";
import { TailSpin } from "react-loader-spinner";

function CommentForm({ articleID }: { articleID: number }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm<comment>({
    resolver: zodResolver(commentForm),
  });
  const [createComment, { loading }] = useMutation(SUBMIT_COMMENT, {
    variables: {
      name: getValues("name"),
      message: getValues("message"),
      article: articleID,
    },
  });

  console.log(errors);

  const handleComment = async () => {
    try {
      await createComment();
      toast.success("comment show after admin check");
      reset();
    } catch (error) {
      toast.error("try again later!...");
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleComment)}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Typography
        component="h3"
        variant="h3"
        color="#00AAA1"
        fontSize="2rem"
        sx={{ width: "100%", borderBottom: "1px solid #e3e3e3", mb: 5 }}
      >
        Comments
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box
          component="label"
          htmlFor="comment-name"
          fontSize={14}
          sx={{ color: "#777" }}
        >
          Name
        </Box>
        {errors.name && (
          <Typography component="p" fontSize={14} sx={{ color: "red" }}>
            Name must contain at least 3 character(s)
          </Typography>
        )}
      </Box>

      <Box
        component="input"
        type="text"
        fontSize={16}
        id="comment-name"
        {...register("name")}
        sx={{
          px: 2,
          py: 1.5,
          width: "100%",
          border: "1px solid",
          outline: "none",
          borderRadius: 1.5,
          fontFamily: "Noto Sans",
          borderColor: errors.name ? "red" : "#e3e3e3",
          ":focus": {
            borderColor: errors.name ? "red" : "#00AAA1",
          },
          mb: 2,
        }}
      />
      <Box display="flex" justifyContent="space-between">
        <Box
          component="label"
          htmlFor="comment-message"
          fontSize={14}
          sx={{ color: "#777" }}
        >
          Message
        </Box>
        {errors.message && (
          <Typography component="p" fontSize={14} sx={{ color: "red" }}>
            Message must contain at least 10 character(s)
          </Typography>
        )}
      </Box>
      <Box
        component="textarea"
        id="comment-message"
        rows={5}
        {...register("message")}
        sx={{
          outline: "none",
          resize: "none",
          padding: "16px 12px",
          border: "1px solid",
          borderColor: errors.message ? "red" : "#e3e3e3",
          borderRadius: "4px",
          width: "100%",
          marginTop: 0.5,
          marginBottom: 2,
          fontFamily: "Noto Sans",

          ":focus": {
            borderColor: errors.message ? "red" : "#00AAA1",
          },
        }}
      />
      <Box
        component="button"
        disabled={!isValid || loading}
        px={4}
        py={1.5}
        type="submit"
        sx={{
          border: "none",
          bgcolor: "#00AAA1",
          color: "#fff",
          fontFamily: "Noto Sans",
          borderRadius: 2,
          fontSize: 16,
          opacity: isValid ? (loading ? 0.5 : 1) : 0.5,
          width: "fit-content",
          alignSelf: "end",
          transition: "opacity ease-in-out .2s",
        }}
      >
        {loading ? (
          <TailSpin width="22px" height="22px" color="#fff" />
        ) : (
          "Send"
        )}
      </Box>
    </Box>
  );
}

export default CommentForm;
