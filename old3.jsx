<MediaQuery maxWidth={ mobile }>
                {membersInfo.map(user => (

                <div class="testimony_container">

                    <TestimonyComponent 
                        name={user.name}
                        pictureName={user.pictureName}
                        title={user.title}
                        testimony={user.testimony}
                    />
                    
                </div>
                ))}
                <Badges />
            </MediaQuery>
            
            <MediaQuery minWidth={ desktop }>
                <div class="all-testimonies">
                    {membersInfo.map(user => (
                        <div class="testimony_container">
                        <TestimonyComponent
                            name={user.name}
                            pictureName={user.pictureName}
                            title={user.title}
                            testimony={user.testimony}
                        />
                        </div>
                    ))}
            </div>

