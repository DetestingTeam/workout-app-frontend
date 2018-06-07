import React, {Component} from 'react';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class Workouts extends Component {
    render(){
        return(
        <div>
            <div class='main-container'>
                <div class='map1'>

                    <iframe title='frame1'
                    width="400"
                    height="350"
                    frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDGC6QAps8ZE8-q3f_quRFafP_n13n3P0Y&q=Learn+Academy,San+Diego,CA" allowfullscreen>
                    </iframe>

                    <Card className='card1'>
                            <CardMedia
                                className='card1'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Maximum Thruster
                                </Typography>
                                <Typography component="date">
                                    Date/Time:
                                </Typography>
                                <Typography component="instructor">
                                    Instructor:
                                </Typography>
                            </CardContent>
                    </Card>
                </div>


            <div class='map2'>
                <iframe title="frame2"
                    width="400"
                    height="350"
                    frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDGC6QAps8ZE8-q3f_quRFafP_n13n3P0Y&q=Learn+Academy,San+Diego,CA" allowfullscreen>
                </iframe>

                <Card className='card2'>
                        <CardMedia
                            className='card2'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline">
                                Maximum Thruster
                            </Typography>
                            <Typography component="date">
                                Date/Time:
                            </Typography>
                            <Typography component="instructor">
                                Instructor:
                            </Typography>
                        </CardContent>
                </Card>
            </div>

                <div class='map3'>
                    <iframe title='frame3'
                        width="400"
                        height="350"
                        frameborder="0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDGC6QAps8ZE8-q3f_quRFafP_n13n3P0Y&q=Le    arn+Academy,San+Diego,CA" allowfullscreen>
                    </iframe>

                    <Card className='card3'>
                            <CardMedia
                                className='card3'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="h2">
                                    Maximum Thruster
                                </Typography>
                                <Typography component="date">
                                    Date/Time:
                                </Typography>
                                <Typography component="instructor">
                                    Instructor:
                                </Typography>
                            </CardContent>
                    </Card>
                </div>
            </div>



                <Paper className="paper">
            <Table className="upcoming">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Instructor</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                    <TableRow>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                        <TableCell>testing</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            </Paper>

        </div>
        )
    }
}

export default Workouts;
