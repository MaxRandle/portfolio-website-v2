import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import UtttBoard from "./uttt/components/App";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3, 0, 0, 0),
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 3, 0),
  },
  flexColItemSmallMargin: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  padSides: {
    padding: theme.spacing(0, 2, 0, 2),
  },
  center: {
    textAlign: "center",
  },
}));

const UTTTAI = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="md" className={clsx(classes.flexColContainer)}>
      <Typography variant="h3" className={clsx(classes.flexColItem, classes.padSides)}>
        Ultimate Tic-Tac-Toe AI
      </Typography>

      <UtttBoard className={clsx(classes.flexColItem)} />

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        The game of UTTT (Ultimate Tic Tac Toe) is a recursive version of the more familiar game of Tic Tac Toe (Naughts
        and Crosses). The game is played on a board consisting of nine mini-boards arranged into the shape of a Tic Tac
        Toe board. Victory is achieved by winning three mini-boards in a row. The twist is that by playing a move, you
        restrict your opponents move choices to only play in the mini-board relative to the cell you have just played
        in. For example. If you play in the top right cell of any given mini-board, your opponent must play in the top
        right mini-board.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        This game presents interesting challenges for both humans and machines to play. The biggest challenge facing
        players whether your brain is made of silicon or flesh is that it is very difficult to determine which player
        has an advantage for a given game state. Even some of the worlds best human players struggle to accurately
        evaluate a game of UTTT played at a high level.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        Designing an agent that can play this game involves implementing two key components. Firstly we need to
        implement a tree searching algorithm that can look into possible future positions of the game. And secondly we
        need to come up with an evaluation function to guide our search by identifying advantageous positions to play
        for.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        For the search algorithm we use the minimax algorithm. This algorithm takes a game state and depth as inputs.
        The algorithm calculates all board states legally reachable in depth=n moves. Then our evaluation function is
        called on each leaf node game state. The evaluation scores for each leaf node are then propagated up the search
        tree in a way that selects the most advantageous move for the player who’s move it is at each level. Finally an
        overall evaluation is returned.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        Coming up with an evaluation function to guide our search is a critical part of our agent. But as previously
        mentioned, this is no simple task. For a game like chess we can come up with many of highly effective metrics
        for evaluating a given game state. For example. How connected are your pawns? How advanced are your pawns? Is
        your king castled? Are your rooks connected? How active are your minor pieces? Etc… A chess engine will look at
        all of these metrics and then apply a weighting to each metric. Chess engines can produce some incredibly
        accurate evaluations this way. For UTTT it is very difficult to come up with metrics which can be used for a
        reliable evaluation. For this case one option we have is to make use of Monte-Carlo tree search. This method
        randomly plays out the game to completion many times and returns the win/loss ratio. While this method is highly
        effective, it relies heavily on hardware and is too intensive to produce an accurate evaluation in a reasonable
        time when run inside a browser. Another possibility we have is to try to figure out an evaluation that is less
        accurate but can be computed in a very short amount of time and therefore will allow us to search deeper into
        the game to compensate. This was the approach used for this agent. The evaluation function that was created for
        this scenario is described as follows... Firstly it checks if the game is over and if it is, returns a large
        positive or negative score (depending on the winner). If the game is not over it means we cannot see the end of
        the game within our search tree. So we must estimate how close we are to winning using more complex methods. The
        function then evaluates the large TTT board the same way that we evaluate the small boards (this will be
        explained shortly) and applies a weight to it, as it is preferable to win the large board over a mini-board.
        Then each of the mini-boards are evaluated in the following way. The basis of this evaluation is that we check
        how many possible remaining ways there are for us to win a board. For example in a board where we have played
        one move in the centre, we have four ways we can win, two diagonals, a vertical, and a horizontal line. Now
        imagine that our opponent plays in one of the corners. The total ways we can win is now reduced by one. The
        score given to each mini-board is multiplied by a weighting based on where the board is (middle {">"} corner{" "}
        {">"} edges) and the number of winning lines that rely on that board. All scores are then summed to give the
        final evaluation.
      </Typography>

      <Typography className={clsx(classes.flexColItem, classes.padSides)}>
        With these two components we can create an agent that is able to play considerably better than an untrained
        human. But it is still resource intensive and takes a long time to calculate the best move. So we can apply some
        optimisation to vastly improve calculation speeds. The first optimisation technique available to us is to
        implement alpha-beta-pruning into our minimax algorithm. The gist of this technique is to “prune” large branches
        out of the search tree by eliminating positions that can’t effect the outcome of the game. It’s pointless to
        waste time computing a position that your opponent will never let you reach due to it taking a better move
        earlier. Another optimisation technique is something called simulated annealing (AKA “random jump”). The idea is
        to emulate a “temperature” which gradually decreases as the game goes on. This idea works for UTTT because the
        game ends in a predictable number of moves. The temperature represents a probability that the agent does not
        calculate its best move and instead plays a random move. The idea being that moves made earlier on in the game
        are far less important that moves made close to the end of the game. This helps to bring the average move time
        down but does not reduce the time taken to play every move. This would be useful in a situation where the agent
        has a limited time to make all of its moves such as the way chess matches are held. The last optimisation
        technique is called progressive deepening. This allows the agent to search more deeply into lines of play that
        are likely to result in good positions. For example. If a line of play involves capturing a mini-board it is
        likely to be good so we should evaluate it more deeply than the others. This agent only makes use of
        alpha-beta-pruning for optimisation. In the future I plan to implement progressive deepening as well. Until then
        though, enjoy playing against my agent and have fun getting crushed...
      </Typography>
    </Container>
  );
};

export default UTTTAI;
